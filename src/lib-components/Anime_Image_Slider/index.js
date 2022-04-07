import react from "react";
import React from "react";
import { useEffect,useState,useRef } from "react";
import style from "./index.module.css"

const AnimeSlider = ({data})=>{


    const handle_container = useRef();
   
    const [currnum , setCurrnum] = useState(0);
    const [offset,setoffset] = useState(0);
    const [ innerwidth , setInnerwidth]  = useState();
    const [trigger_comp , setTriggercomp] = useState(true);
    const [textanime , setTextanime] = useState(false);
    const [listitem , setListItem] = useState(data);
    const [windowwidth,setWindowwidth] = useState(window.innerWidth);

    // useEffect(()=>{
     
    //     async function getData(){
    //         const URL = "https://api.jikan.moe/v4/top/anime"
    //        const response = await fetch(URL)
    //         const result  = await response.json()
            
    //         setListItem(result.data.slice(0,4))
    //         console.log(result.data);
    //     }
    //     getData()
    // },[])

   
    const getinnerwidth = ()=>
    {
        setInnerwidth(handle_container.current.clientWidth);
       
       if(windowwidth<650)
       {
        setTriggercomp(true);
  
       }
       else{
        setTriggercomp(false);
      
       }
    }

    const windowSizeBreakpoint = react.useCallback(()=>
    {
        
        if(window.innerWidth <650)
        {
         setTriggercomp(true);
   
        }
        else{
         setTriggercomp(false);
       
        }
    },[windowwidth])

  
    useEffect(()=>{
        const size = ()=>
        {
          if(listitem.length>0)
          {
            setInnerwidth(handle_container.current.clientWidth);
            handle_container.current.style.transition = "none";
            windowSizeBreakpoint();
            setWindowwidth(window.innerWidth);
          }

        }
        window.addEventListener("resize", size);

       
        //switch to current visable slide
        let num = currnum;
        change(num);
        return ()=> window.removeEventListener("resize",size);
    })

    //* next button
    const gonext = () => {
        handle_container.current.style.transition = "0.4s ease-in";
        let num = currnum;
        if (num === listitem.length-1) {
            num = 0;
            setCurrnum(num);
            setoffset(0);
            return;
        }
        setCurrnum(num + 1);
        
        change(num+1);
    }

    //* previous button
    const goprev = () => {
        handle_container.current.style.transition = "0.4s ease-in";
        let num = currnum;
        if (num <= 0) {
            num = listitem.length-1;
            setCurrnum(num);
          
           setoffset(-(innerwidth+20) * (num - 1));
            return;
        }
        setCurrnum(num - 1);

        change(num - 1);
    }

    //move the slides
    function change(num) {
        setoffset(-(innerwidth+20) * num);
       
    }

  
    const textanimation_enter = ()=>
    {

        setTextanime(true);
      
    }
    const textanimation_leave = ()=>
    {

        setTextanime(false);
       
    }






    return <React.Fragment>
            <div className={style["container-large"]}>
            <h2 className={style['top-list-header']}>Top Anime</h2>
             {listitem.length>0 ? <div className = {style["top-list"]} >
                <button type="button" className={style["prev-btn"]} onClick={goprev}>{"<"}</button>
                <button type="button" className={style["next-btn"]} onClick={gonext}>{">"}</button>
                <div className={style["top-list-inner"]}>

                    <div className={style["top-list-item-container"]} ref={handle_container} onLoad={getinnerwidth} style={{left :`${offset}px`,transition:"none"}}>
                        {
                            listitem.map((item)=>
                            {
                                const {mal_id,image_url,synopsis,title} = item;
                                return <div className={style["list-item"]} key={mal_id} >
                                    <img src={image_url} alt="" />
                                   {
                                        (trigger_comp===false) ? <div className={style["info"]}>
                                            <h2>{title}</h2>
                                            <p>{(synopsis)?(synopsis.length > 125) ? synopsis.substr(0, 125) + "..." : synopsis:"No Information"}</p>
                                            <a href="#"  className={style["btn-seemore"]}>
                                                <div className={style["inner-div"]}>
                                                    <span>{">"}</span>
                                                    <span>See more</span>
                                                </div>
                                            </a>
                                        </div> : <div className={style["info-sc"]}  onMouseEnter={textanimation_enter} onMouseLeave={textanimation_leave}>
                                            <h3 className={style["list-heading-sc" ]}
                                            style={(textanime)?{transform:"translateX(0)"}:
                                            {transform:"translateX(-120%)"}}>
                                                {(title.length>35)?title.substr(0,34)+"...":title}
                                            </h3>
                                            <p className={style["list-para-sc" ]}
                                            style={(textanime)?{transform:"translateX(0)"}:
                                            {transform:"translateX(-120%)"}}>
                                                {(synopsis)?(synopsis.length > 65) ? synopsis.substr(0, 65) + "..." : synopsis:"No Information"}
                                            </p>
                                            <a href="#" className={style["btn-seemore-sc"]} style={(textanime)?{top:"0"}:{top:"25%"}}>See more</a>
                                            
                                        </div>
                                   }
                                </div>
                            })
                        }
                     
                       
                        
                    </div>
                </div>
            </div>
           : <h4 className={style["no-item"]}>Empty list</h4>}
            </div>
       </React.Fragment>
}

export default AnimeSlider;