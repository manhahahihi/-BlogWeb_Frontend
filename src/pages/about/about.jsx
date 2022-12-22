import "./about.css";
import React from 'react';
import logo from './logo.jpg'; 
import Header from "../../components/header/Header";

console.log(logo); 
export default function About() {
  
  return (
      <>
      <Header/>
      <div className="img">
          <img src={logo}/> 
          <p>
          All team members - missing Tu (Gather 99% of the team's web-making effort)
        </p>
      </div>
    
    
    
      <body className="page">
      <div className="content">
      <div className="row">
      <div className="col">
          <h1 className="h1">About MTPlog</h1>
      </div>
</div>
<div className="row">
<div className="col">
<p className="h5"><p>Our mission</p><p />FreePrivacyPolicy is a self-serve service website provided to you by the team behind FreePrivacyPolicy.</p>
<p className="h5">We are commited to make it as easy as possible to generate Privacy Policies and other legal policies that most website owners, small business owners & developers would require to build their businesses.</p>
<p className="h5">In addition to the legal policies, we also offer 100% free tools for compliance requirements such as Cookie Consent.</p>
<p />
<p className="h5"><p>Our story</p><p />We started with Privacy Policies in 2008, but since 2020 we have added support for a wider range of legal policies, such as Terms & Conditios, Cookies Policy and more.</p>
<p />
<p className="h5"><p>Official reseller</p><p />pight Market (dba FastSpring), 801 Garden St., Santa Barbara, CA 93101, US is the authorized reseller of FreePrivacyPolicy.com</p>
<p />
<p className="h5"><p>Contact</p><p />You can contact us by following the instructions on <a href="/contact">our Contact page</a>. We'll do our best to reply in the shortest time possible.</p>
<p />
</div>

      </div>
      
      </div>
      </body> 
      </>
  );
}
