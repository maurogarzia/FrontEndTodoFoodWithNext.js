import Swal from "sweetalert2"

export const succesAlert = (title: string, text: string) => {
    Swal.fire({
        icon: 'success',
        title: title,
        text: text
    })
}