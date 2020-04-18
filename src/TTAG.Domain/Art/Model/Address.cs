﻿using System;
using System.Collections.Generic;
using System.Text;

namespace TTAG.Domain.Model
{
    public class Address
    {
        public string Street1 { get; set; }
       
        public string Street2 { get; set; }
        
        public string PostalCode { get; set; }
        
        public string City { get; set; }
        
        public string Country { get; set; }
    }
}
