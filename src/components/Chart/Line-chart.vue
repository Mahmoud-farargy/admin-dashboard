<script>
import { Line } from 'vue-chartjs';
import chartsMix from "./chartsMixin.js";
 
export default {
  mixins: [ chartsMix],
  extends: Line
}
</script>