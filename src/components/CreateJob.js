import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

const CreateJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    experienceLevel: '',
    candidates: '',
    endDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        }
      };

      const body = JSON.stringify({
        ...formData,
        candidates: formData.candidates.split(',').map(email => email.trim())
      });

      await axios.post('http://localhost:5000/api/jobs', body, config);
      navigate('/dashboard');
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Job</CardTitle>
        <CardDescription>Post a new job opportunity</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input id="title" name="title" required onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea id="description" name="description" required onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experienceLevel">Experience Level</Label>
            <Input id="experienceLevel" name="experienceLevel" required onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="candidates">Candidate Emails (comma-separated)</Label>
            <Input id="candidates" name="candidates" required onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input id="endDate" name="endDate" type="date" required onChange={handleChange} />
          </div>
          <Button type="submit" className="w-full">Create Job</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateJob;