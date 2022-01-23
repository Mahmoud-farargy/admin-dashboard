<script>
import { Doughnut } from 'vue-chartjs';
import chartsMix from "./chartsMixin.js";
 
export default {
  mixins: [ chartsMix ],
  extends: Doughnut
}
</script>