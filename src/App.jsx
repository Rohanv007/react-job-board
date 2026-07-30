import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "data:image/png;base64,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",
    company: "Google",
    posted: "5 days ago",
    title: "Frontend Developer",
    type: "Full Time",
    level: "Junior",
    pay: "$45/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikGFJR-a0827PjlHAYz5Afmo_7FYLw2JY-2w07VfIYA&s=10",
    company: "Microsoft",
    posted: "3 days ago",
    title: "Software Engineer",
    type: "Full Time",
    level: "Senior",
    pay: "$78/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
    company: "Amazon",
    posted: "2 days ago",
    title: "Backend Developer",
    type: "Full Time",
    level: "Junior",
    pay: "$50/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    company: "Meta",
    posted: "1 day ago",
    title: "React Developer",
    type: "Full Time",
    level: "Senior",
    pay: "$90/hr",
    location: "London, UK",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2tL_LqE0tXh0tBYRxY0_FnYVAJXw_0ArGg3BGHAByw&s=10",
    company: "Apple",
    posted: "4 days ago",
    title: "iOS Engineer",
    type: "Full Time",
    level: "Senior",
    pay: "$95/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMznz1zJ3fNTFggg26u-HrG1L7P1uQHJ4uqv7cishUA&s=10",
    company: "Netflix",
    posted: "5 days ago",
    title: "Full Stack Developer",
    type: "Full Time",
    level: "Junior",
    pay: "$65/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVOIc3TdpXlir_U77oBbYAiEyROPTOmM7sTJxiRzI2A&s",
    company: "NVIDIA",
    posted: "6 days ago",
    title: "AI Software Engineer",
    type: "Full Time",
    level: "Senior",
    pay: "$105/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLI55MzPEITlum7aMpfmoCpqnnzmo-pacpvi6eXjXbyw&s=10",
    company: "Adobe",
    posted: "2 days ago",
    title: "Frontend Engineer",
    type: "Full Time",
    level: "Junior",
    pay: "$55/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNlxDrxKkVDTdhr-YCaNFCHI5rvAJh5XaZHaspXjSMw&s=10",
    company: "Uber",
    posted: "7 days ago",
    title: "Backend Engineer",
    type: "Full Time",
    level: "Senior",
    pay: "$85/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzGsfBiKTjQUbKwC2BVBfyWJThIXA-H_jHeBixRW5Eg&s=10",
    company: "Salesforce",
    posted: "3 days ago",
    title: "Software Developer",
    type: "Full Time",
    level: "Junior",
    pay: "$52/hr",
    location: "Hyderabad, India",
  },
  ];
  
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        
        return <div key={idx}>
        <Card company={elem.company} post={elem.posted} title={elem.title} type={elem.type} level={elem.level} pay={elem.pay} loca={elem.location} brandLogo={elem.brandLogo} />
        </div>
      })}
    </div>
  )
}

export default App
