import MainRoot from "../pages";
import AddPage from "../pages/addPage";
import Basket from "../pages/basket";
import DetailPage from "../pages/detailpage";
import Home from "../pages/home";

 export const ROUTES = [{
    path: '/',
    element: <MainRoot />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: 'add-page',
            element: <AddPage />
        },
        {
            path: 'basket',
            element: <Basket />
        },
        {
            path: 'products/:id',
            element: <DetailPage />
        }
    ]

}]