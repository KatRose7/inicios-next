import { Metadata } from "next";

export const metadata: Metadata ={
    title:'Contact Page',
    description: 'Pagina de contacto',
};

export default function ContactPage(){
    return(<>
        <span className="text-7xl">Contact Page</span>
        </>
    )
}