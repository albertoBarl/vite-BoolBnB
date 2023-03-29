import { createApp } from "vue";
import App from "./App.vue";
import "/node_modules/bootstrap/dist/css/bootstrap.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

import tt from "@tomtom-international/web-sdk-maps";

const map = tt.map({
  key: "<88h7OGbX03JY9XNCvFfNYmu0jPwzkmQ2>",
  container: "map",
});

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
