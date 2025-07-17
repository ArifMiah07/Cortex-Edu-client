import Profile from "@/components/profile/profile";

export default async function ProfilePage(){
    const url = `http://localhost:5000/api/v1/course/all-courses`;
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);


    return <Profile data={data?.data} />
}