import React from "react";

const FooterPage = () => {
  return (
    // <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
    //   <MDBContainer fluid className="text-center text-md-left">
    //     <MDBRow>
    //       <MDBCol md="6">
    //         <h5 className="title">Footer Content</h5>
    //         <p>
    //           Here you can use rows and columns here to organize your footer
    //           content.
    //         </p>
    //       </MDBCol>
    //       <MDBCol md="6">
    //         <h5 className="title">Links</h5>
    //         <ul>
    //           <li className="list-unstyled">
    //             <a href="#!">Link 1</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">Link 2</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">Link 3</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">Link 4</a>
    //           </li>
    //         </ul>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    //   <div className="footer-copyright text-center py-3">
    //     <MDBContainer fluid>
    //       &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
    //     </MDBContainer>
    //   </div>
    // </MDBFooter>

    // <!--footer starts from here-->
    <footer class="footer mt-5">
      <div class="container bottom_border">
        <div class="row">
          <div class=" col-sm-4 col-md col-sm-4  col-12 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Find us</h5>
            {/* <!--headin5_amrc--> */}
            <p class="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <p><i class="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35 </p>
            <p><i class="fa fa-phone"></i>  +91-9999878398  </p>
            <p><i class="fa fa fa-envelope"></i> info@example.com  </p>


          </div>

          <div class=" col-sm-4 col-md  col-6 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
            {/* <!--headin5_amrc--> */}
            <ul class="footer_ul_amrc">
              <li><a href="http://webenlance.com">Image Rectoucing</a></li>
              <li><a href="http://webenlance.com">Clipping Path</a></li>
              <li><a href="http://webenlance.com">Hollow Man Montage</a></li>
              <li><a href="http://webenlance.com">Ebay and Amazon</a></li>
              <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
              <li><a href="http://webenlance.com">Image Cropping</a></li>
            </ul>
            {/* <!--footer_ul_amrc ends here--> */}
          </div>
          <div class=" col-sm-4 col-md  col-6 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
            {/* <!--headin5_amrc--> */}
            <ul class="footer_ul_amrc">
              <li><a href="http://webenlance.com">Remove Background</a></li>
              <li><a href="http://webenlance.com">Shadows and Mirror Reflection</a></li>
              <li><a href="http://webenlance.com">Logo Design</a></li>
              <li><a href="http://webenlance.com">Vectorization</a></li>
              <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
              <li><a href="http://webenlance.com">Image Cropping</a></li>
            </ul>
            {/* <!--footer_ul_amrc ends here--> */}
          </div>


          <div class=" col-sm-4 col-md  col-12 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
            {/* <!--headin5_amrc ends here--> */}

            <ul class="footer_ul2_amrc">
              {/* <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
              <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
              <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li> */}
            </ul>
            {/* <!--footer_ul2_amrc ends here--> */}
          </div>
        </div>
      </div>

      <div class="container">
        <ul class="foote_bottom_ul_amrc">
          <li><a href="http://webenlance.com">Home</a></li>
          <li><a href="http://webenlance.com">About</a></li>
          <li><a href="http://webenlance.com">Services</a></li>
          <li><a href="http://webenlance.com">Pricing</a></li>
          <li><a href="http://webenlance.com">Blog</a></li>
          <li><a href="http://webenlance.com">Contact</a></li>
        </ul>
        {/* <!--foote_bottom_ul_amrc ends here--> */}
        <p class="text-center">Copyright @2017 | Designed With by <a href="http://webenlance.com">Your Company Name</a></p>
        <ul class="social_footer_ul">
          <li><a href="http://webenlance.com"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="http://webenlance.com"><i class="fab fa-twitter"></i></a></li>
          <li><a href="http://webenlance.com"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="http://webenlance.com"><i class="fab fa-instagram"></i></a></li>
        </ul>
        {/* <!--social_footer_ul ends here--> */}
      </div>
    </footer>


  );
}

export default FooterPage;