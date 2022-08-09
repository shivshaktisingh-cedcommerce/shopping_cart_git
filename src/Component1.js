import React, { useEffect } from 'react'
import "./Component1.css"
import {data} from "./Data.js"
import {useState} from 'react'
import { Button, Drawer } from '@mui/material'
import { SearchOffRounded } from '@mui/icons-material'

export default function Component1() {

    //flag ,flag1 , flag2 , flag3 , flag4 , flag5 is to map one array at once 
    const [flag,setFlag]=useState(false)
    const [flag1,setFlag1]=useState(false)
    const [flag2,setFlag2]=useState(false)
    const [flag3,setFlag3]=useState(false)
    const [flag4,setFlag4]=useState(false)
    const [flag5,setFlag5]=useState(false)
    //searchname contains the text typed in searchbox
    const[searchname, setSearchname]=useState([])

    //searchinput contains list of all mathched search items
    const[searchinput, setSearchinput]=useState()
   
    //selected items are in cart arrray
    const [cart,setCart]=useState([])

    //cartis contains id of selected item
    const [cartid,setCartid]=useState([])

    //total amount is totalbill
    const[totalamount,setTotalamount]=useState(0)

    //this function will execute when we click on show more clothes button
    const buttonfun=()=>{
        document.getElementById("products_main_div").setAttribute("style","display:none")
        document.getElementById("welcome_and_product_button").setAttribute("style","display:none")
        setFlag(true)
    }
    useEffect(()=>{
      var z = 0;
       cart.map((d)=>{
           z = z + d.quantity * d.selling;

       })
       setTotalamount(z)

    },[cart])

    //this function will run on add to cart button click

    const addtocartfun=(d , i)=>{
         if(cartid.indexOf(i)===-1){
             setCartid([...cartid,i])
             setCart([...cart,d])
         }

    }

    //function to increase quantity
    const increasequantfun=(d)=>{ 
        cart.map((x)=>{
            if(x.clotheid==d.clotheid){
                x.quantity = x.quantity +1;
                x.total = parseInt(x.selling) * parseInt(x.quantity);
                }
                setCart([...cart])
        })
    }

    //to set flag values and will invoke on checkbox click

    const checkboxfun=(d)=>{
        if(d===1){
            if(flag2===false){
                setFlag2(true) 
            }
            else if(flag2===true){
                setFlag2(false)
            }
                  
        }
        if(d===2){
            if(flag3===false){
                setFlag3(true) 
            }
            else if(flag3===true){
                setFlag3(false)
            }
        }
        if(d===3){
            if(flag4===false){
                setFlag4(true) 
            }
            else if(flag4===true){
                setFlag4(false)
            }
        }
       
            document.getElementById("products_main_div").setAttribute("style","display:none")
            document.getElementById("welcome_and_product_button").setAttribute("style","display:none")
        
      
    }

    //onchange function of search box

    const searchfun=(event)=>{
        setSearchname([])
        var query = event.target.value
        setSearchinput(query)
        var temp=[]
        if (query.length > 0) {           
         data.clothes.map((i)=>{
             if(i.title.includes(query)){
                 temp.push(i)
             }
           
         })
        }
        setSearchname([...temp])
         console.log(searchname)
    }

    //will execute on click of search icon

    const searchiconclick=()=>{
   
        if(searchinput.length>0){
            setFlag(false)
            setFlag2(false)
            setFlag3(false)
            setFlag4(false)
            setFlag5(true)
            document.getElementById("products_main_div").setAttribute("style","display:none")
        }
        console.log(searchname)
       
    }

    //function to decrease quantity

    const decreasequantfun =(d)=>{
        cart.map((x)=>{
            if(x.clotheid==d.clotheid){
                if(x.quantity>1){
                x.quantity = x.quantity - 1;
               
                }}
                x.total = parseInt(x.selling) * parseInt(x.quantity);
                setCart([...cart])
              
        })
    }
  return (
    <div id="component1_main_div">
        <marquee>Free Shipping Over Rs. 1000.</marquee>
        <div id="logo_div_id"><p>SHOPCLUES</p><p id="fine_lifestyle_clothes_p_id">Fine Lifestyle Clothes</p></div>
        <div id="navicon_div_id"><div class="popover__wrapper">
  <a href="#">
    <h2 class="popover__title"><i class="fas fa-bars navicon popover__title" ></i></h2>
  </a>
  <div class="popover__content">
    <p class="popover__message"><input type="checkbox" onClick={()=>checkboxfun(1)}/>Men's Shirt</p>
    <p class="popover__message"><input type="checkbox" onClick={()=>checkboxfun(2)}/>Men's Trousers</p>
    <p class="popover__message"><input type="checkbox" onClick={()=>checkboxfun(3)}/>Men's tshirt</p>
    
  </div>
</div>
        <div id="search_id_div"><input type="text" id="search_input_id" autoFocus onChange={searchfun}/><i class="fa fa-search search_icon" aria-hidden="true" onClick={searchiconclick}></i></div>
        <div id="cart_div_id"><i class="fa fa-shopping-cart cart_icon" aria-hidden="true" onClick={()=>setFlag1(true)}></i><sup style={{color:"white",fontSize:"2vw",backgroundColor:"#662B15",borderRadius:"50%"}}>{cartid.length}</sup></div>
        </div>
        <div id="welcome_and_product_button">


            <p id="welcome1">WELCOME TO SHOPCLUES</p>
            <p id="welcome2">Before you get settled in, here's a quick lowdown. Established in 2007, shopclues is a small independent fine lifestyle clothes brand. Men's t-shirt , shirts , trousers made in India of rich fabric, felted wool and cotton alternative.</p>
            <p id="btn_p_id"><button id="btn_id_show_me_the_clothes" onClick={buttonfun}>SHOW ME THE CLOTHES</button></p>
        </div>
       <div id="products_main_div">
        {data.demo.map((d)=>{
            return <div id="repetitive_demo">
                           <div id="product_image_div_id"><img src={d.image} alt="" id="product_image_id"/></div>
                           <p id="product_title_p_id">{d.title}</p>
                </div>

        })}
        </div>
        <div id="all_products">
        {flag===false?"":data.clothes.map((d)=>{
            return <div id="repetitive_demo">
                           <div id="product_image_div_id"><img src={d.image} alt="" id="product_image_id"/></div>
                           <p id="product_title_p_id">{d.title}</p>
                           <p><del style={{color:"red"}}>{"Rs. "+ d.Listprice}</del></p>
                           <p><span style={{color:"blue"}}>{"Rs. " + d.selling}</span></p>
                           <p><button id="add_to_cart_btn_id" onClick={()=>addtocartfun(d , d.clotheid)}>Add to cart</button></p>
                </div>

        })}
        </div>
       
        <div id="all_products">
        {flag2===false?"":data.clothes.map((d)=>{
             if(d.type=="shirt"){
                return <div id="repetitive_demo">
                <div id="product_image_div_id"><img src={d.image} alt="" id="product_image_id"/></div>
                <p id="product_title_p_id">{d.title}</p>
                <p><del style={{color:"red"}}>{"Rs. "+ d.Listprice}</del></p>
                <p><span style={{color:"blue"}}>{"Rs. " + d.selling}</span></p>
                <p><button id="add_to_cart_btn_id" onClick={()=>addtocartfun(d , d.clotheid)}>Add to cart</button></p>
             </div>
             }
           

        })}
        </div>
        <div id="all_products">
        {flag4===false?"":data.clothes.map((d)=>{
            if(d.type=="tshirt"){
                return <div id="repetitive_demo">
                <div id="product_image_div_id"><img src={d.image} alt="" id="product_image_id"/></div>
                <p id="product_title_p_id">{d.title}</p>
                <p><del style={{color:"red"}}>{"Rs. "+ d.Listprice}</del></p>
                <p><span style={{color:"blue"}}>{"Rs. " + d.selling}</span></p>
                <p><button id="add_to_cart_btn_id" onClick={()=>addtocartfun(d , d.clotheid)}>Add to cart</button></p>
         </div>
            }
           

        })}
        </div>
        <div id="all_products">
        {flag3===false?"":data.clothes.map((d)=>{
            if(d.type=="trouser"){
                return <div id="repetitive_demo">
                <div id="product_image_div_id"><img src={d.image} alt="" id="product_image_id"/></div>
                <p id="product_title_p_id">{d.title}</p>
                <p><del style={{color:"red"}}>{"Rs. "+ d.Listprice}</del></p>
                <p><span style={{color:"blue"}}>{"Rs. " + d.selling}</span></p>
                <p><button id="add_to_cart_btn_id" onClick={()=>addtocartfun(d , d.clotheid)}>Add to cart</button></p>
             </div>
            }
           

        })}
        </div>
        <div id="all_products">
        {flag5===false ?"":searchname===[]?"No Result Found":searchname.map((d)=>{
                return <div id="repetitive_demo">
                <div id="product_image_div_id"><img src={d.image} alt="" id="product_image_id"/></div>
                <p id="product_title_p_id">{d.title}</p>
                <p><del style={{color:"red"}}>{"Rs. "+ d.Listprice}</del></p>
                <p><span style={{color:"blue"}}>{"Rs. " + d.selling}</span></p>
                <p><button id="add_to_cart_btn_id" onClick={()=>addtocartfun(d , d.clotheid)}>Add to cart</button></p>
     </div>
            
           

        })}
        </div>
        <Drawer
         open={flag1}
        
         anchor='right'
         onClose = {()=>setFlag1(false)}
        >
            <Button variant='contained' onClick={()=>setFlag1(false)}>Close</Button>
           <div id="cart_product">   
          {cart.map((e)=>{
              return <div id="repetitive_cart_div">
                  <div id="cart_image_div"><img src={e.image} alt="" id="cart_image_id"/><br/>{e.title}</div>
                  <div id="button_div_id"><button onClick={()=>increasequantfun(e)} className="increment_btn_id_add">+</button><button className="increment_btn_id_quant">{e.quantity}</button><button onClick={()=>decreasequantfun(e)} className="increment_btn_id_decrease">-</button><br/>
                  <p>{"Rs. " +e.total}</p>
                  </div>
                  
              </div>
            
          })}
          <p id="total_amount">{"Total Amount : " +totalamount}</p>
          <button id="checkout">Checkout</button>
          </div>
        </Drawer>
        
    </div>
    
  )
  
}
