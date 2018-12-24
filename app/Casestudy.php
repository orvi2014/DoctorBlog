<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Casestudy extends Model
{
    protected $fillable = ['title', 'case_description', 'case_solution', 'doctor_name', 'pharmacy_name'];
}
