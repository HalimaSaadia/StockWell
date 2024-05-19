import Swal from "sweetalert2";

const customizedModal =(title, icon)=>{
    Swal.fire({
        icon: icon,
        title: title,
        showClass: {
          popup: "swal2-show",
        },
        hideClass: {
          popup: "",
        },
      });
}

export default customizedModal