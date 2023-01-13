import { SetStateAction, Dispatch, FormEvent } from "react";
import { TableContents } from "../Table/Table";

interface AlertModalProps {
  useContents: Dispatch<SetStateAction<TableContents>>,
}

export default function AlertModal({useContents}: AlertModalProps) {
  function onSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Creating our alert object
    const newAlert = {
      alert: (e.target as any).elements[0].value,
      status: '',
      updates: [],
    }

    // Updating the rowContents array with our alert object
    useContents(currContent => ({
      columnTitles: currContent.columnTitles,
      rowContents: currContent.rowContents.concat(newAlert),
    }))
  }
  
  return (
    <form data-testid='form' onSubmit={onSubmitEvent}>
      <label> Add new alert: </label>
      <input type='text' id='alert' name='alert' />
      <button type='submit'> Add </button>
    </form>
  )
}
