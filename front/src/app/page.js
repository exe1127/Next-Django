
import FormTask from "./componetes/formTask";
import ListTask from "./componetes/listTask";
export default function Home() {
  return (
    <>
    <div className="container mx-auto my-3">
         <div className="flex gap-x-10">
       <FormTask />
      <ListTask/>
    </div>
    </div>
 
     
    </>
  );
}
