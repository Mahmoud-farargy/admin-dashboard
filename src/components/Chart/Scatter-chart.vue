<script>
import { Scatter } from 'vue-chartjs';
import chartsMix from "./chartsMixin.js";
 
export default {
  mixins: [ chartsMix ],
  extends: Scatter
}
</script>