import { Layout, Home, MainFeaturedPost, FeaturedPost} from '@/components'
import React, {useEffect} from 'react';
import axios from "axios";
import styles from '../styles/Home.module.css'

export default function HomePage() {
  
return (<>
    <Layout>
        <Home/>
        <MainFeaturedPost/>
        <FeaturedPost/>
    </Layout>
    
    </>
)
}