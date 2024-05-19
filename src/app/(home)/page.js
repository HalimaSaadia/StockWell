"use client"

import Swal from "sweetalert2";
import "./style.css"
import Modal from "@/components/shared/modal/Modal";
import customizedModal from "@/utils/modal";
import { Banner } from "@/components/ui/HomePageBanner/Banner";
import { Navbar } from "@/components/shared/Navbar/Navbar";




const page = () => {
    const customizedAlert = () =>{
        customizedModal("Oops","error")
    }
    return (
        <div>
           
            <Banner />
            {/* <button onClick={customizedAlert} className="text-white px-8 py-3 bg-primaryColor rounded-xl m-5">StockWell</button> */}
   <p className="text-neutral-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolore officiis vel, necessitatibus earum temporibus animi molestiae possimus illo fugit tenetur eaque, distinctio enim corporis corrupti. Voluptas nulla ullam optio maiores quaerat amet eos. Quisquam distinctio, voluptate nihil hic nesciunt quia porro nisi amet ad saepe animi ipsam totam itaque optio tenetur quos cupiditate in quo voluptatem fugiat nobis quibusdam vero. Dolore quis odit corrupti aliquid. Voluptates modi iure nihil, facilis minima enim quae nemo accusamus eum dolorum in velit deleniti, optio quis atque sed. Animi consequatur facere architecto placeat, adipisci tempora, laudantium a explicabo aut consequuntur, beatae inventore pariatur odit reiciendis voluptates. Odit, nulla earum. Nesciunt voluptate ipsa debitis rerum laudantium, et illum, eos reiciendis in, dicta cupiditate. Eius eligendi beatae ea rerum eos nulla distinctio cumque delectus, quam ad ducimus ipsum, quibusdam qui eum. Voluptatem laboriosam libero voluptate soluta quia, nihil ab quae voluptatum labore eius illo quidem error amet ducimus quaerat autem, perspiciatis officia natus. Facilis exercitationem ea quas recusandae nobis minus, ad dolor, reprehenderit cum est quod impedit ut perferendis debitis dicta at excepturi quos libero eum labore. Officia architecto dolores nemo, dolorem ipsum doloribus alias illum sed neque soluta dolor odio, illo sit ullam perferendis animi quis culpa nulla unde ducimus repellendus ad, iste sequi laboriosam? Cupiditate, quo laboriosam neque fugit fugiat vero, iste exercitationem consectetur, voluptatibus fuga tempore ullam! Ab ipsam, saepe nemo consequuntur a unde cupiditate iusto ullam repudiandae magnam impedit minima voluptatibus ad quae. Recusandae rerum beatae aspernatur totam ipsa qui vero nostrum sit quae quisquam. Quia ut alias deleniti nesciunt assumenda aspernatur. A eius quasi enim est. Voluptatibus sapiente ut adipisci! Velit odio consequatur assumenda ratione necessitatibus dolorum error harum exercitationem iusto, iste dolor doloremque enim nostrum aperiam deserunt sunt aliquam. Facilis eligendi repudiandae similique impedit officiis cumque nesciunt at adipisci. Veniam cum dolorem hic. Non totam facere eligendi placeat, voluptatum neque sunt consequuntur explicabo laboriosam, necessitatibus alias error perspiciatis, aliquam sapiente fuga molestias nulla nemo qui nam reiciendis magnam ipsa. Deserunt blanditiis ullam culpa, libero ea est animi quos at et officia quibusdam quaerat aliquid nemo. Nobis, temporibus nemo? Tenetur ipsa nesciunt blanditiis impedit voluptas, praesentium nemo quam sit modi vel omnis voluptate facilis cumque cum cupiditate, sunt aperiam excepturi magnam iure porro perspiciatis culpa error autem. Ipsam recusandae est, assumenda eaque mollitia vero minima debitis laborum maiores inventore enim ullam reprehenderit nostrum, error voluptas non amet illum corrupti, quasi voluptatem. Delectus mollitia eos pariatur in? Fugiat magni vel ipsam minus, saepe ullam nihil nam sunt neque suscipit qui iure ad minima consectetur repellendus enim eaque soluta molestiae similique, repellat debitis! Minima facere nihil placeat necessitatibus a iure sed, exercitationem deleniti adipisci laudantium harum veniam, ab provident? Ex quis nobis, eveniet ipsum labore perspiciatis alias laborum consectetur similique voluptate sit blanditiis fuga illum odio error earum ut velit in mollitia cumque esse vitae architecto officia. Asperiores dolorem qui modi possimus minima natus, saepe dolore. Dolores consectetur enim, doloribus soluta earum nesciunt sequi, quaerat, dignissimos quibusdam fugiat deleniti minima. Incidunt, tenetur.</p>
        </div>
    );
};

export default page;