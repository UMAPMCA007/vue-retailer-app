<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Retailer extends Model
{
    use HasFactory;
    protected $table='retailers';
    protected $fillable = [
        'name',
        'shop',
        'shop_address',
    ];
}
