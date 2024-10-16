import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('/api/jobs', {
          headers: {
            'x-auth-token': localStorage.getItem('token')
          }
        });
        setJobs(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button asChild>
          <Link to="/create-job">Create New Job</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map(job => (
          <Card key={job._id}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>Experience: {job.experienceLevel}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{job.description}</p>
              <p className="mt-2 text-sm text-gray-500">End Date: {new Date(job.endDate).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;