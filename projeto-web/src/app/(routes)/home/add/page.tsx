import FormView from "@/features/form/components/FormView";
import { AppProvider } from "@/shared/context/AppContext";

export default function AddMoviePage() {
  return (
    <AppProvider>
      {" "}
      <FormView />
    </AppProvider>
  );
}
