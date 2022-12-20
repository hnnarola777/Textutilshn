import React,{useState} from 'react'
export default function TextForm(props) 
{
    const changeuppercase = () => {
        console.log("yes you are clicked " +text)
        let cn = text.toUpperCase();
        setText(cn)
      props.showalert("success ","Your word is uppercase")

    }
    const changelowercase = ( ) =>
    {
        let ch1 = text.toLowerCase();
        setText(ch1);
        props.showalert("success ","Your word is Lowercase")
    }
    const capital = () =>
    {
        let ch2 = text.split(" ");
        console.log(ch2)
        for(let i = 0 ; i < ch2.length ; i++)
        {
            ch2[i] =  ch2[i].charAt(0).toUpperCase() + ch2[i].slice(1).toLowerCase(); 
        } 
       let str = ch2.join(" ");
        setText(str);
    }
    const changeon = (event) => 
    {
        console.log("Yes you are clicked ");
        setText(event.target.value)
    }
    const copytext = () =>
    {
        let text1 = document.getElementById("mybox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
    }

    const removeextraspace = () =>
    {
        let text4 = text.split(/[ ]+/);
        setText(text4.join(" "));
    }

    const [text , setText] = useState('');
    return (
    <>
    <div className="container my-5" style={{ color :props.mode === 'dark' ? 'white' : 'black'}}>

        <h1 >{props.heading}  </h1>
        <div className="mb-0" style={{Color :props.mode === 'light'? 'Black' : 'white'}}>
            <textarea className="form-control" value={text}  onChange={changeon} style={{backgroundColor :props.mode === 'light'? 'Black' : 'white' , color :props.mode === 'light'? 'white' : 'black'}} id="mybox" rows="8"></textarea>
            <button className="btn btn-primary my-4" onClick={changeuppercase} style={{backgroundColor :props.mode==='light '? 'white' : 'black'}} >convert to uppwercase </button>
            <button className="btn btn-primary mx-3" onClick={changelowercase} >convert to Lowercase</button>
            <button className="btn btn-primary mx-0" onClick={capital} >convert to capital word of first later </button>
            <button className="btn btn-primary mx-3" onClick={copytext} >Copy text </button>
            <button className="btn btn-primary mx-0" onClick={removeextraspace} >Remove Extra Space</button>
        </div>
    </div>
    <div className="container" style={{color :props.mode === 'light'? 'Black' : 'white'}}> 
        <h1> Your words summary </h1>
        <p> {text.split(" ").filter(text => text !== '').length} words and {text.length} character </p>
        <p> {0.008 * text.split(" ").length } Minutes to read  </p>
        <h2> Preview </h2>
        <p> {text.length>0?text : "Please Preview Your Text Here"} </p>
    </div>
    </>
  )
}
