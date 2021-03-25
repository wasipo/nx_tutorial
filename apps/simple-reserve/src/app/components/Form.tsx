import React,{FC} from 'react';
import StoreInfo from './forms/Setting/StoreInfo';

type Props = {
  page: string 
}

const Form: FC<Props> = ({page}) => {

  return (
    <div>
      {
      (page === 'StoreInfo') ?
      <StoreInfo /> : 
      ''
      }
    </div>
  )

}

export default Form;