import React from 'react'

export default function () {
  return (
    <div>
        <div className="container bootstrap snippets bootdey">
    <h1 className="text-primary" style={{ color:"black"}}>Edit Profile</h1>
      <hr/>
	<div className="row">
      
      <div className="col-md-3">
        <div className="text-center">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="avatar img-circle img-thumbnail" alt="avatar"></img>
          <h6>Upload a different photo...</h6>
          
          <input type="file" class="form-control" />
        </div>
      </div>
      
      
      <div className="col-md-9 personal-info">
       
        <h3>Personal info</h3>
        
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label className="col-lg-3 control-label">First name:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-3 control-label">Last name:</label>
            <div className="col-lg-8">
              <input class="form-control" type="text" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">University:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" />
            </div>
          </div>
          <div>
            <button type='Submit'value={'submit'} >Save Changes</button>
          </div>
        </form>
      </div>
  </div>
</div>


    </div>
  )
}
