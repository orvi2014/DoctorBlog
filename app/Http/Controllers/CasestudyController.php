<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CasestudyController extends Controller
{
  public function casestore(Request $request)
      {
        $validatedData = $request->validate([
          'title' => 'required',
          'case_description' => 'required',
          'case_solution' => 'required',
          'doctor_name' => 'required',
          'pharmacy_name' => 'required',
        ]);

        $casestudy = casestudy::create('/api/casestudies', function(Blueprint $table){
          'title' => $validatedData['title'],
          'case_description' => $validatedData['case_description'],
          'case_solution' => $validatedData['case_solution'],
          'doctor_name' => $validatedData['doctor_name'],
          'pharmacy_name' => $validatedData['pharmacy_name'],
        });
        }


        return response()->json('Case Study Created!');
      }
