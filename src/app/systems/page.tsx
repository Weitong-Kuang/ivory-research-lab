import { getAllContent } from "../../lib/data";
import SystemsClient from "./SystemsClient";

export default async function SystemsPage() {
  const systems = getAllContent('systems');

  return <SystemsClient systems={systems} />;
}
