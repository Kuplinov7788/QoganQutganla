import React from 'react'
import CourseCard from './CoursesCard';


const Cards = () => {
    const courses = [
        {
            id: 1,
            category: "Marketing",
            title: "The Ultimate Google Ads Training Course",
            price: 100,
            author: "Jerome Bell",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            category: "Management",
            title: "Product Management Fundamentals",
            price: 480,
            author: "Marvin McKinney",
            image: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            id: 3,
            category: "HR & Recruiting",
            title: "HR Management and Analytics",
            price: 200,
            author: "Leslie Alexander Li",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            id: 4,
            category: "Marketing",
            title: "Brand Management & PR Communications",
            price: 530,
            author: "Kristin Watson",
            image: "https://randomuser.me/api/portraits/women/22.jpg"
        },
        {
            id: 5,
            category: "Management",
            title: "Business Development Management",
            price: 400,
            author: "Dianne Russell",
            image: "https://randomuser.me/api/portraits/women/48.jpg"
        },
        {
            id: 6,
            category: "Design",
            title: "Graphic Design Basic",
            price: 500,
            author: "Guy Hawkins",
            image: "https://randomuser.me/api/portraits/men/12.jpg"
        }
    ];
    console.log(courses);

    return (
        <div className="min-h-screen bg-white p-6">
            <div className='flex justify-between'>
                <div><p className='text-black text-l'>Ready to learn?</p>
                    <h1 className='text-black text-2xl font-bold'>Featured Courses</h1></div>
                <div className="bg-white p-6">
                    <button className="btn btn-neutral btn-outline bg-white border-[#F75E05] text-[#F75E05] hover:bg-[#F75E05] hover:text-white shadow-none">Outline</button>
                </div>
            </div>
            <div className=" mx-auto space-y-4 grid grid-cols-2">

                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        image={course.image}
                        category={course.category}
                        title={course.title}
                        price={course.price}
                        author={course.author}
                    />
                ))}
            </div>
        </div>
    );
}

export default Cards