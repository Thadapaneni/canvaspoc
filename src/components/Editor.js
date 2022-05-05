import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Todo from './TodoData';
const EdField = ({setCo})=>{
    const editorRef = useRef(null);
    const initialText = 'The quick brown fox jumps over the lazy dog';
    const [text, setText] = useState('');
    const[item,setItem]=useState([])


    
    const handleSubmit = (e) =>{
      e.preventDefault();
      const date = new Date();
      const time = date.getTime()
      const object ={
        id:time,
        msg:text
        

      }
      
setItem([...item,object])
setText('')


console.log(item)
    }
    
    
    return(
        <>
        <form   onSubmit={handleSubmit}>
        <Editor
        apiKey='z30p9qwmvgw3pwdx7rmepin8f72d2x0ibw25wjyqpb5dxnr4'
      
   
          
          onEditorChange={(newText) => setText(newText)}
          init={{
            height: 200,
            menubar: false,
           
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
           
          }}
        />
  <button type="submit"  >Submit</button>
</form>
        
      <Todo  item={item}/>
        
       
      </>
    )
}
export default EdField