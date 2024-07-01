 <form id="myForm">
    <script>
        const form=document.getElementById('myForm');
        formDataToObject(FormData){
            const jsonObject={};
            for(const[key,value] of 
                formData.entries()){
                    jsonObject[key]=value;
                }
                return jsonObject;
            
        };
form.addEventListener('submit',function(event)
{
    event.preventDefault();
    const formData=new formDataToObject(formData);
    const jsonString=
    JSON.stringify(jsonObject);
    const blob=new
    Blob([jsonString],{type:'application/json'});
    const link= document.createElement('a');
    link.href=URL.createObjectURL(blob);
    link.download='json-me-convert-hogya.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
</script>
</form>
};