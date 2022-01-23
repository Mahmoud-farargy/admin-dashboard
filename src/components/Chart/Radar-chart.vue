<script>
import { Radar } from 'vue-chartjs';
import chartsMix from "./chartsMixin.js";
 
export default {
  mixins: [ chartsMix ],
  extends: Radar
}
</script>