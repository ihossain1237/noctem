import React from 'react';
import CustomButton from "../custom-button/customButton.component";
import {menJacketsImages,
    menJacketsNames,
    menShirtImages,
    menShirtNames,
    menTrouserImages,
    menTrouserNames,
    menTShirtImage,
    menTShirtNames,
    meanJeansNames,
    menJeansImages,

    womenDressesImages,
    womenDressesNames,
    womenJacketsImages,
    womenJacketsNames,
    womenJeansImages,
    womenJeansNames,
    womenSuitsImages,
    womenSuitsNames,
boyCoatsImg,
boyCoatsName,
boyJacketsImg,
boyJacketsName,
boyShirtsImg,boyShirtsNames,
boyTShirtsImg,boyTShirtsNames,
girlLeggingsName,girlShirtsImg,girlsJeansImg,girlsJeansName,girlsLeggingsImg,
girlsShirtsName,girlsSkirtsImg,girlsSkirtsName,girlsTShirtsImg,girlsTShirtsName} from "../../DATA";
import appData from "../../api/appData";

const DataInput = () => {



    const dataCreate =async (img,name,category,type)=>{
        const randomNumber = (min,max)=>Math.random() * (max - min) + min;
        const product = {};
        for (let i = 0 ; i<img.length;i++){

            product.name=name[i];
            product.image = img[i];
            product.price = (randomNumber(60,99)+0.99).toFixed(2);
            product.type =type;
            product.category=category;
            const body = JSON.stringify({...product});
            const config ={
                headers:{
                    "Content-Type":"application/json"
                }
            };
            const res = await  appData.post('/products/input',body,config);
            console.log(res);
    }
    };
    const onSubmit =  () =>{

        dataCreate(menTShirtImage,menTShirtNames,'men','t-shirt');
        dataCreate(menTrouserImages,menTrouserNames,'men','trouser');
        dataCreate(menJacketsImages,menJacketsNames,'men','jacket');
        dataCreate(menShirtImages,menShirtNames,'men','shirt');
        dataCreate(menJeansImages,meanJeansNames,'men','jeans');
        dataCreate(womenDressesImages,womenDressesNames,'women','dress');
        dataCreate(womenJacketsImages,womenJacketsNames,'women','jacket');
        dataCreate(womenJeansImages,womenJeansNames,'women','jeans');
        dataCreate(womenSuitsImages,womenSuitsNames,'women','suit');
        dataCreate(boyCoatsImg,boyCoatsName,'boy','coat');
        dataCreate(boyJacketsImg,boyJacketsName,'boy','jacket');
        dataCreate(boyShirtsImg,boyShirtsNames,'boy','shirt');
        dataCreate(boyTShirtsImg,boyTShirtsNames,'boy','t-shirt');
        dataCreate(girlsLeggingsImg,girlLeggingsName,'girl','legging');
        dataCreate(girlShirtsImg,girlsShirtsName,'girl','shirt');
        dataCreate(girlsJeansImg,girlsJeansName,'girl','jeans');
        dataCreate(girlsTShirtsImg,girlsTShirtsName,'girl','t-shirt');
        dataCreate(girlsSkirtsImg,girlsSkirtsName,'girl','skirt');

    }
    return (
        <div className={`container`} style={{margin:'auto',height:'50vh',width:'50vw',background:'grey'}}>
            <CustomButton onClick={onSubmit}>SUBMIT</CustomButton>
        </div>
    );
};

export default DataInput;