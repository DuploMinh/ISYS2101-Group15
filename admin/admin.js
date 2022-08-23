
// Javascipt code to redirect admin to details page
document.addEventListener("DOMContentLoaded",  () => {
    const rows = document.querySelectorAll("tr[data-href]");//Read all rows with the links
    rows.forEach (row => { //each row add one event listener
        row.addEventListener('click', () => {
            window.location.href = row.dataset.href; //redirect window to the link
        });
    });
});



// <?php
//                     $rows = 0;
//                     //Read file from the bottom (the most recent registered first)
//                     if (count($users) != 0) {
//                         //Check the remain user for last page
//                         $remain = count($users) % $user_per_page;
//                         if ($remain != 0) {
//                             //if its last page print remain users
//                             if ($page == $number_of_page) {
//                                 $user_per_page = $remain;
//                             }
//                         }

//                         //Check if the search box has any value
//                         if (isset($_GET['search'])) {
//                             $filte_value = $_GET['search']; //Value you enter the search box
                        
//                             //Loop form bottom, each page has 5 user
//                             for ($i = (count($users) - $page_first_record); $i > (count($users) - $page_first_record) - $user_per_page; $i--) {

//                                 //Check the search value for first name, last name, and email (case-insensitive)
//                                 if (stripos($users[$i - 1]['first_name'], $filte_value) !== false || stripos($users[$i - 1]['last_name'], $filte_value) !== false || stripos($users[$i - 1]['email'], $filte_value) !== false) {
//                                     ?>
//                                         <!-- Link to details page for each row (passing userid as superglobal GET) -->
//                                         <tr data-href="details.php?userid=<?php echo $users[$i - 1]['userid']; ?>">
//                                          <!--Assign data for each element of the row -->
//                                          <td><?php echo $users[$i - 1]['first_name']; ?></td>
//                                          <td><?php echo $users[$i - 1]['last_name']; ?></td>
//                                          <td><?php echo $users[$i - 1]['email']; ?></td>
//                                          <td><?php echo $users[$i - 1]['password']; ?></td>
//                                          <td class="profile_picture" ><img src="<?php echo "profile_images/" . $users[$i -1]['profile_img']['name']; ?>" alt=""></td>
//                                          <td><?php echo $users[$i - 1]['userid']; ?></td>
//                                         </tr>
//                                     <?php
//                                     $rows += 1;
//                                 }
//                             }
//                             //Check if there is no matching value
//                             if ($rows == 0) {
//                                 ?>
//                                 <tr>
//                                     <td>No records!</td>
//                                 </tr>
//                                 <?php
//                             }    
//                         } else {
//                             //Loop from bottom, each page has 5 user
//                             for ($i = (count($users) - $page_first_record); $i > (count($users) - $page_first_record) - $user_per_page; $i--) {
//                                 ?>
//                                 <!-- Link to details page for each row (passing userid as superglobal GET) -->
//                                 <tr data-href="details.php?userid=<?php echo $users[$i - 1]['userid']; ?>">
//                                     <!--Assign data for each element of the row -->
//                                     <td><?php echo $users[$i - 1]['first_name']; ?></td>
//                                     <td><?php echo $users[$i - 1]['last_name']; ?></td>
//                                     <td><?php echo $users[$i - 1]['email']; ?></td>
//                                     <td class="profile_picture" ><img src="<?php echo "profile_images/" . $users[$i -1]['profile_img']['name']; ?>" alt=""></td>
//                                     <td><?php echo $users[$i - 1]['userid']; ?></td>
//                                 </tr>
//                                 <?php
//                             }
//                         }
//                     }
//                 ?>