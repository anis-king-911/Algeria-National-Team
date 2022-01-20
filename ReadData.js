import {
  database, ref, child, set, onValue
} from './export.js';

import {
  DataForm
} from './DataForm.js';

const tBody = document.querySelector('tbody')

export const LoadData = ()=> {
  const database_ref = ref(database, 'AlgVs/')
  
  onValue(database_ref, (snapshot)=> {
    tBody.innerHTML = '';
    if(snapshot) {
      console.log(Object.keys(snapshot.val()).length)
      snapshot.forEach((Game)=> {
        const data = Game.val()
        
        tBody.innerHTML += DataForm(data);
      })
    }
  })
}