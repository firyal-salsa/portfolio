import React from "react";
import "./SkillSet.scope.css";

const SkillSet = () => {
  return (
    <section className="container-page-skillset " id='skillset'>
      <div class="view-3D data-close controls-close">
          <div id="universe" class="scale-stretched">
            <div id="galaxy">
              <div id="solar-system" class="earth">
                <div id="earth" class="orbit">
                  <div class="pos">
                    <div className="space-x-9">
                      <div class="planet-skillset">
                        <img src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1673531926/tech%20stack/odoo_iygocm.png' alt=''/>
                        {/* <img src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1634289445/tech%20stack/express_xmzka6.svg' alt=''/>
                        <img src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1673531825/tech%20stack/javascript_oel9ub.svg' alt=''/>
                        <img src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1676255956/tech%20stack/python_shauaa.svg' alt=''/>
                        <img src='' alt=''/>
                        <img src='' alt=''/>
                        <img src='' alt=''/> */}
                      </div>
                      <div className="space-x-12"> 
                        <div class="planet">
                          <img src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1673531825/tech%20stack/javascript_oel9ub.svg' alt=''/>
                        </div>
                        <div class="planet">
                          {/* <img src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1634289445/tech%20stack/express_xmzka6.svg' alt=''/> */}
                          <img src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1676255956/tech%20stack/python_shauaa.svg' alt=''/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sun">
                  <p className="text-xl">SkillSet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default SkillSet;
