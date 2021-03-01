import React,{FC} from 'react';
import SettingForm from './forms/Setting';

type Props = {
  page: string 
}

const Form: FC<Props> = (Props) => {

  return (
    <div>
      {
      (Props.page === 'setting') ?
      <SettingForm /> : 
      ''
      }
    </div>
  )

}

export default Form;