import React,{FC} from 'react';
import SettingForm from './forms/Setting';

type Props = {
  page: string 
}

const Form: FC<Props> = ({page}) => {

  return (
    <div>
      {
      (page === 'Setting') ?
      <SettingForm /> : 
      ''
      }
    </div>
  )

}

export default Form;