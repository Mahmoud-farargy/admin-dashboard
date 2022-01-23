<template>
  <div id="grid" v-if="headers && headers.length > 0">
    <v-data-table
    :headers="headers"
    :items="itemsList"
    :sort-by="defaultSortByHead"
    class="elevation-1"
    item-key="name"
    :show-select="showSelect"
    :mobile-breakpoint="670"
    :loading="isLoading"
    :single-select="false"
  >
  <!-- dialogs -->
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="text-capitalize">{{gridTitle}}</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col v-for="(header, idx) in headers.filter(el => !el.readonly)"
                    :key="header.value + idx"
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      class="text-capitalize"
                      v-if="!header.readonly"
                      v-model="editedItem[header.value]"
                      :label="header.text || header.value"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <!-- custom user cell -->
    <template v-slot:[`item.user`]="{item}">
      <div class="adjacent--elements flex-row">
          <v-avatar size="30" color="#ced2d8">
            <v-icon size="18" dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>  
        <span :style="{textTransform: 'capitalize'}">
          {{item.user}}
        </span>
      </div>

    </template>
    <!-- custom status cell -->
    <template v-slot:[`item.status`]="{ item }">
      <v-chip v-if="item.status" dark :color='getStatusColor(item.status)'>{{item.status}}</v-chip>
    </template>
    <!-- custom actions cell -->
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-3 text-success"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        class="text-danger"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <div class="my-5">
        <h6>{{`No data available. Click the "New Item" above to add new ${gridTitle}.`}}</h6> 
      </div>
    </template>
  </v-data-table>
  </div>
</template>

<script>
import { database } from "@/config/firebase";
import { generateNewId, lowerString } from "@/utilities/tools";
export default {
    name: "crud_grid",
    props: {
        gridTitle: {
          type: String,
          required: true
        },
        showSelect: {
          type: Boolean,
          required: false,
          default: true
        },
        dataObj: {
          type : Object,
          required: true
        },
        isLoading: {
          type: Boolean,
        }
    },
  data: () => ({
      dialog: false,
      dialogDelete: false,
      singleSelect: false,
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
      },
      headers(){
        return (Object.keys(this.dataObj)?.length > 0 && Object.prototype.hasOwnProperty.call(this.dataObj, "headers")) ? this.dataObj.headers : [];
      },
      itemsList(){
        // reformat data
        return (Object.keys(this.dataObj)?.length > 0 && Object.prototype.hasOwnProperty.call(this.dataObj,"itemsList")) ?
            Object.entries(this.dataObj.itemsList).map(([id, itemObj]) => {
                return {
                  id,
                  ...itemObj
                }
            })
        : [];
      },
      defaultSortByHead() {
        return this.headers?.length > 0 ? (this.headers.filter(el => el.sortable !== false)?.[0]?.value) : "";
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
      editedIndex(val){
          val === -1 && this.resetEditItem();
      }
    },

    methods: {
      generateNewId,
      lowerString,
      editItem (item) {
        this.editedIndex = this.itemsList.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },

      deleteItem (item) {
        this.editedIndex = this.itemsList.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;
       
      },

      deleteItemConfirm () {
        this.handleDataFirebase({condition: "delete", id: this.editedItem.id});
        this.closeDelete();
      },
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedIndex = -1;
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        })
      },
      resetEditItem() {
        Object.keys(this.editedItem).forEach((key) => {
          this.editedItem = {
            ...this.editedItem,
            [key]: ""
          }
        });
      },
      save () {
        if (this.editedIndex > -1) {
           this.handleDataFirebase({condition: "edit", newData: this.editedItem, id: this.editedItem.id});
        } else {
          this.handleDataFirebase({condition: "add", newData: this.editedItem});
        }
        this.resetEditItem();
        this.close();
      },
      handleDataFirebase ({condition,newData, id}) {
        const { gridTitle } = this;
        if( gridTitle ){
          switch(condition){
            case "add":{
              const newID = generateNewId({lettersOnly: true, letterPieces: 3});
                const objToSave = {
                  ...newData,
                  id: newID
                }
                Object.keys(newData)?.length > 0 && database.ref(`/${gridTitle}/${newID}`).set(objToSave);
                break;
            }
            case "edit": {
                (Object.keys(newData)?.length > 0 && id && this.itemsList.some(el => el.id === id)) && database.ref(`/${gridTitle}/${id}`).set(newData);
                break;
            }
            case "delete": {
                id && database.ref(`/${gridTitle}/${id}`).remove();
                break;
            }
            default:
          }
        }
      },
      getStatusColor(status){
        switch(lowerString(status)){
            case "approved":
              return "#e5faf2";
            case "declined":
              return "#fff0f1";
            case "pending":
              return "#ebf1fe";
            default:
              return "#e3f0f5";
        }
      }
    },
    mounted(){
      if(this.dataObj?.headers?.length > 0){
        let newHeaders = {}
        this.dataObj.headers.forEach(currVal => {
          const { readonly = false } =  currVal;
          if(!readonly){
            newHeaders = {
              ...newHeaders,
              [currVal.value]: ""
            }   
          }
        });
        this.editedItem = newHeaders;
        this.defaultItem = newHeaders;
      }
  
    }
};
</script>

<style lang="scss" scoped>
  #grid{
    .adjacent--elements{
      align-items: center;
      flex-wrap: wrap;
      gap: 0.1rem 0.5rem;
    }
  }
</style>