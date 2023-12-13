## Local storage
- Typically the react appliation's states is volatile . 
- Meaning , when we refresh the code , the state is reset that time . 
- This is not the component state , even redux is removed . 
- because all the react states are in RAM memory .
- Local storage is the opposite of that . 
- here , the data is persistant .
- persistant means that the will will stay , even after refreshing or closing the browser and opening again . 
- because , the local storage data is stored on the hard disk/ssd's.
- The data is stored like a key and value pair . 
- the value is a string 
- The functionality is provided by the browsers .
- In order to see local storafge , we can head over to the application tab and  on the left hand pane , we will find the local storage . Which will contaain a list of all the domains which have created local storage items .
- Local storage is per website . So , if I have multiple tabs opened for the same website , all of them will have the same access to the data .
- and if we open the same website on a different / or a different , then both places the items stored in local storage will differ . 


## Hoc / High order componenents / higher order components

- These components can accept or return (both) another compoments.
- we can send any component as a child to another component .
- this is very similar to higher order functions . There , we used to deal with fuctions being passed as an parameter . here we deal with components passed like that . 
- we can just see the tag of the component and say , is the tag is a paired tag , then it is a higher order component . otherwise (self-closing) , it is a **first order componments** .
- for example 


## first order components 

- Any compoent that is not a high order component is a first order component . 
- This component cannot accept any children . 
- We are not sending any children to it . 