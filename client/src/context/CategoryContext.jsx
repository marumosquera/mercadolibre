import { createContext, useState } from "react";

const CategoryContext = createContext()

const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([])

    const data = {
        categories, setCategories
    }

    console.log(categories)
    return(
        <CategoryContext.Provider value={data}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider

export {CategoryContext}