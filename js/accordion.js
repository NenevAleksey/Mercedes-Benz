const lists = document.querySelectorAll(".feature-sub");
const buttons = document.querySelectorAll('.feature__link');

buttons.forEach((btnItem, index) => {
   btnItem.addEventListener('click', () => {
      if (btnItem.classList.contains("feature__link_active")) {
         btnItem.classList.remove('feature__link_active');

         lists[index].classList.add('hidden');
      } else {
         buttons.forEach((btnItem) => {
            btnItem.classList.remove('feature__link_active');
         })

         btnItem.classList.add('feature__link_active');

         lists.forEach((listItem) => {
            listItem.classList.add('hidden');
         })

         lists[index].classList.remove('hidden');
      }
   })
})
