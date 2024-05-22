import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Skinny Jeans Blue',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!',
    img1: 'https://1and5tech.com/wp-content/uploads/2023/05/1-2-770x400.jpg',
    img2: 'https://th.bing.com/th/id/OIP.3VLrmWtcDuTo6gOKpraqiQHaE8?w=600&h=400&rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    title: 'Casual Shirt Red',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!',
    img1: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
    img2: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
  },
  {
    id: 3,
    title: 'Leather Jacket Black',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!',
    img1: 'https://images.unsplash.com/photo-1536894070361-7f5f5c89d89c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
    img2: 'https://images.unsplash.com/photo-1569078446215-e71a3d0d02a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
  },
  {
    id: 4,
    title: 'Formal Suit',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!',
    img1: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
    img2: 'https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 5,
    title: 'Sport Shoes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!',
    img1: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
    img2: 'https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 6,
    title: 'Casual Watch',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi dicta impedit aperiam ipsum!',
    img1: 'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
    img2: 'https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
];

function Services() {
  return (
    <div className="container mx-auto py-12" id='services'>
      <h1 className='flex justify-center pb-4 text-7xl'>Nos Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <a key={service.id} href="#" className="group relative block bg-black">
            <img
              src="https://static.android.com.pl/uploads/2023/03/Depositphotos_288020418_XL-scaled.jpg"
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-[#00519b]">Service</p>
              <p className="text-xl font-bold text-white sm:text-2xl">{service.title}</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Services;
