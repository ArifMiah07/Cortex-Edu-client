export default function CourseDetails({params}: {params:{slug: string}}){
    console.log(params);
    return(
        <div>
            this is {params.slug}
        </div>
    )
}