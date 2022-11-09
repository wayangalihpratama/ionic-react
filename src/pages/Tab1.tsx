import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";

// ARF
import "akvo-react-form/dist/index.css"; /* REQUIRED */
import { Webform } from "akvo-react-form";
import forms from "../example.json";
import cascade from "../example-cascade.json";
import tree_option from "../example-tree-select.json";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Webform
          forms={{
            ...forms,
            cascade: { administration: cascade },
            tree: { administration: tree_option },
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
