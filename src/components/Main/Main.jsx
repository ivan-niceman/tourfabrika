import Widget from "../Widget/Widget";
import Visas from "../Visas/Visas";
import Insurances from "../Insurances/Insurances";
import About from "../About/About";
import Form from "../Form/Form";

export default function Main() {
  return (
    <main className="main">
      <Widget />
      <Visas />
      <Insurances />
      <About />
      <Form />
    </main>
  );
}
