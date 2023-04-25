import React from 'react'
import './myJobsStyles.css'

function MyJobs() {
    return (
        <>
            <div className="jobPostings-container">


                {/* <table>
                    <thead>
                        <tr className='tableHead'>
                            <td>
                                <p>My Job Postings</p>
                            </td>
                            <td> search bar</td>
                            <td>delete</td>
                        </tr>
                    </thead>
                    <tbody></tbody>

                </table> */}

                <table id='jobs'>
                    <thead>
                        <tr>
                            <td colSpan='3' align='left'>My Job Postings</td>
                            <td colSpan='3'>search</td>
                            <td colSpan='1'>del</td>
                        </tr>
                    </thead>
                    <tr className='tableHead'>
                        <th>Positions</th>
                        <th>Candidates</th>
                        <th>Vacancies</th>
                        <th>Published Date</th>
                        <th>Deadline</th>
                        <th>Spotlight</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>UI/UX Developer</td>
                        <td>3</td>
                        <td>24</td>
                        <td>10-06-2023</td>
                        <td>10-06-2023</td>
                        <td>24 Days</td>
                        <td>Interview</td>
                    </tr>
                    <tr>
                        <td>UI/UX Developer</td>
                        <td>3</td>
                        <td>24</td>
                        <td>10-06-2023</td>
                        <td>10-06-2023</td>
                        <td>24 Days</td>
                        <td>Interview</td>
                    </tr>

                </table>
            </div>
        </>
    )
}

export default MyJobs