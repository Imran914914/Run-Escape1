import React from 'react'

const Eye = () => {
    return (
        <div>
           <div>
              <div class="mb-4 flex">
                 <input
                     type={type}
                     name="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     autoComplete="current-password"
                />
                <span class="flex justify-around items-center" onClick={handleToggle}>
                     <Icon class="absolute mr-10" icon={icon} size={25}/>
                 </span>
               </div>
            </div>
         </div>
    ); 
}

export default Eye
