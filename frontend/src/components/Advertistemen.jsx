import React from 'react'
import "./Advertistement.css"

export default function Advertistemen() {
  return (
    <div>
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">Create Advertisement</h5>

              
              <form className="row g-3">
                <div className="col-12">
                  <label for="inputNanme4" className="form-label">Title</label>
                  <input type="text" className="form-control" id="inputNanme4"/>
                </div>
                <div className="col-12">
                  <label for="inputEmail4" className="form-label ">Description</label>
                  <textarea id="subject"  className="form-control" placeholder="Write something.."></textarea>
                  {/* <input type="email" className="form-control dis" id="inputEmail4"/> */}
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">Image</label>
                  <input type="file" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Post</button>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}
