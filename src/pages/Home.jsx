import CategoryItem from "../features/Categorie/CategoryItem"
import ProductCard from "../features/product/ProductCard"

function Home() {

  const Categories=[
    {
      id:1,
      name:"Men Mode ",
      url:"/MenCategories.jpg"
    },{
       name:"Women Mode ",
      url:"/WomenCategories.jpg"

    },{
      id:2,
          name:"Discount ",
      url:"/discountCategories.jpg"
    },{
      id:3,
       name:"Accessories ",
      url:"/accessoriesCategories.jpg"

    }
  ]

  const Products=[
    {
      id:1,
      name:'S-530',
      oldPrice:3500,
      Newprice:2800,
      images:[
         "/s530.png",
        "/s530back.png"
      ]
      

    }, {
      id:2,
      name:'Germanglasses',
      oldPrice:4000,
      Newprice:3500,
      images:[
       "/glassesfront.png",
       "/glassesback.png"
      ]
    

    }, {
      id:3,
      name:'Appel watch',
      oldPrice:8500,
      Newprice:6800,
      images:[
       "/watchappelfront.jpg",
        "/watchappelback.jpg"
      ]
      

    }, {
      id:4,
      name:'Sprint jaket',
      oldPrice:4500,
      Newprice:3800,
      images:[
        "/sprintjaket1.png",
       "/sprintjaket2.png",
       "/sprintjaket3.png",
       "/sprintjaket4.png"
      ]

    }

  ]




  return (
    <div className="  flex mt-[70px] flex-col gap-10 justify-center">

     <div className=" grid  sm:grid-cols-1 md:grid-cols-2  gap-4  ">
      {
        Categories.map((category,index)=>(
          <CategoryItem  index={index+1} key={category.id} url={category.url} Title={category.name} />
        ))
      }

     </div>

      <div className="">

        <h1 className="text-3xl font-bold mb-10">New Arrivals</h1>
        <div className="flex   justify-between items-center flex-wrap gap-10">
        {
        Products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        ))
      }

        </div>
    

      </div>

    


      
    </div>
  )
}

export default Home

  