import { GalleryProps } from "@/types/gallery";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      
      <Profile scientist={{
        name: "Maria Skłodowska-Curie",
        imageId: "szV5sdG",
        profession: "physicist and chemist",
        awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
        discovery: "polonium (element)"
      }} />

      <Profile scientist={{
        name: "Katsuko Saruhashi",
        imageId: "YfeOqp2",
        profession: "geochemist",
        awards: "Miyake Prize for geochemistry, Tanaka Prize",
        discovery: "a method for measuring carbon dioxide in seawater"
      }} />

    </div>
  );
}


function ProfileDetails({ scientist }: GalleryProps) {
  const awardCount = scientist.awards.split(',').length;
  
  return (
    <ul>
      <li>
        <b>Profession: </b>
        {scientist.profession}
      </li>
      <li>
        <b>Awards: {awardCount} </b>
        ({scientist.awards})
      </li>
      <li>
        <b>Discovered: </b>
        {scientist.discovery}
      </li>
    </ul>
  );
}

function Profile({ scientist, size = 70 }: GalleryProps) {
  return (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={`https://i.imgur.com/${scientist.imageId}s.jpg`}
        alt={scientist.name}
        width={size}
        height={size}
      />
      <ProfileDetails scientist={scientist} />
    </section>
  );


}