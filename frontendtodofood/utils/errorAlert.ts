import Swal from "sweetalert2"

export const errorAlert = (title: string, text: string) => {
    Swal.fire({
        icon: "error",
        title: title,
        text: text,
        heightAuto: false,
    })
}