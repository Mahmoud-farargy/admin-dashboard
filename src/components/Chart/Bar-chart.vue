<script>
import { Bar } from 'vue-chartjs';
import chartsMix from "./chartsMixin.js";
 
export default {
  mixins: [ chartsMix ],
  extends: Bar
}
</script>