import { getAllContent } from "../../lib/data";
import ExperimentsClient from "./ExperimentsClient";

export default async function ExperimentsPage() {
  const experiments = getAllContent('experiments');

  return <ExperimentsClient experiments={experiments} />;
}
